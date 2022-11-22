/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useMemo, useState } from 'react';

interface PaginationInterface {
    breakLabel: string;
    nextLabel: string;
    previousLabel: string;
    onPageChange: Function;
    pageCount: number;
    pageRangeDisplayed: number;
    currentPage: number;
    total: number;
    perPage: number;
}

interface  UsePaginatinoInterface {
    totalPageCount: number;
    siblingCount: number;
    currentPage: number;
}

const DOTS = -100

const range = (start: number, end: number) => {
    let length = end - start + 1;
    /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
    return Array.from({ length }, (_, idx) => idx + start);
  };

export const usePagination = ({
    totalPageCount,
    siblingCount = 1,
    currentPage
  }:  UsePaginatinoInterface) => {
    const paginationRange = useMemo(() => {
  
      // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
      const totalPageNumbers = siblingCount + 5;
  
      /*
        Case 1:
        If the number of pages is less than the page numbers we want to show in our
        paginationComponent, we return the range [1..totalPageCount]
      */
      if (totalPageNumbers >= totalPageCount) {
        return range(1, totalPageCount);
      }
      
      /*
          Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
      */
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPageCount
      );
  
      /*
        We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
      */
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
  
      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount;
  
      /*
          Case 2: No left dots to show, but rights dots to be shown
      */
      if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * siblingCount;
        let leftRange = range(1, leftItemCount);
  
        return [...leftRange, DOTS, totalPageCount];
      }
  
      /*
          Case 3: No right dots to show, but left dots to be shown
      */
      if (shouldShowLeftDots && !shouldShowRightDots) {
        
        let rightItemCount = 3 + 2 * siblingCount;
        let rightRange = range(
          totalPageCount - rightItemCount + 1,
          totalPageCount
        );
        return [firstPageIndex, DOTS, ...rightRange];
      }
       
      /*
          Case 4: Both left and right dots to be shown
      */
      if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
      }
    }, [ siblingCount, currentPage]);
  
    return paginationRange;
  };

export default function Pagination(props: PaginationInterface) {

    const { breakLabel, nextLabel, previousLabel, onPageChange, pageCount, currentPage, pageRangeDisplayed, perPage, total } = props
    
    const paginationRange = usePagination({
        currentPage,
        totalPageCount: pageCount,
        siblingCount: pageRangeDisplayed,
      });
    

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <a
                    onClick={() => {
                        if (currentPage !== 1)
                            onPageChange(currentPage - 1);
                    }}
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    {previousLabel}
                </a>
                <a
                    onClick={() => {
                        if (currentPage !== pageCount)
                            onPageChange(currentPage + 1);
                    }}
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    {nextLabel}
                </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Transactions <span className="font-medium">{(currentPage - 1) * perPage  + 1}</span> a <span className="font-medium">{(currentPage - 0) * perPage }</span> de{' '}  <span className="font-medium">{total}</span> pages
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a
                            href="#"
                            onClick={() => {
                                if (currentPage !== 1)
                                    onPageChange(currentPage - 1);
                            }}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">{previousLabel}</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {(paginationRange ?? []).map(pageNumber => {
         
                            // If the pageItem is a DOT, render the DOTS unicode character
                            if (pageNumber === DOTS) {
                                return (<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                    {breakLabel}
                                </span>);
                            }
                            
                            // Render our Page Pills
                            return (
                                <a
                                    href="#"
                                    aria-current="page"
                                    onClick={() => onPageChange(pageNumber)}
                                    className={pageNumber === currentPage  ? "z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" }
                                >
                                    {pageNumber}
                                </a>
                            );
                        })}
                        <a
                            onClick={() => {
                                if (currentPage !== pageCount)
                                    onPageChange(currentPage + 1);
                            }}
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">{nextLabel}</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}