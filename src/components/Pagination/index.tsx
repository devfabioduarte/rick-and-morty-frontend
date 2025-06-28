import { PaginationContainer, PageButton } from "./styles";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const maxPages = 5;
    let start = Math.max(1, currentPage - Math.floor(maxPages / 2));
    let end = start + maxPages - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxPages + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft size={30} />
      </PageButton>
      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          $active={page === currentPage}
        >
          {page}
        </PageButton>
      ))}
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
      >
        <ChevronRight size={30} />
      </PageButton>
    </PaginationContainer>
  );
}
