"use client";

import { clearList, resetList, deleteBook } from "@/lib/features/bookSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Books = () => {
  const { books } = useAppSelector((store) => store.books);
  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(clearList());
  };

  const reset = () => {
    dispatch(resetList());
  };

  const remove = (id: any) => {
    dispatch(deleteBook(id));
  };

  return (
    <main className="min-h-screen bg-base-200 p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="badge badge-secondary badge-outline text-xs font-semibold tracking-wide">
                Advanced Web Development
              </span>
              <h1 className="text-3xl font-extrabold text-base-content mt-1">
                Books by J.K. Rowling
              </h1>
              <p className="text-sm text-base-content/60">
                Total Available:{" "}
                <span className="font-bold text-primary">{books.length}</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {books.length > 0 ? (
                <button
                  onClick={handleClear}
                  className="btn btn-error btn-outline btn-sm"
                >
                  Clear List
                </button>
              ) : (
                <button onClick={reset} className="btn btn-primary btn-sm">
                  Reset List
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Book Grid / Empty State */}
        {books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => {
              const { id, volumeInfo, saleInfo } = book;
              const thumbnail = volumeInfo.imageLinks?.thumbnail;
              const price = saleInfo.listPrice?.amount
                ? `${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}`
                : "Not for Sale";

              return (
                <div
                  key={id}
                  className="card bg-base-100 shadow-md border border-base-200 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="card-body p-6">
                    {/* Top Row: Category & Rating */}
                    <div className="flex justify-between items-center gap-2 mb-2">
                      <span className="badge badge-neutral text-xs truncate max-w-37.5]">
                        {volumeInfo.categories?.[0] || "General"}
                      </span>
                      {volumeInfo.averageRating && (
                        <div className="badge badge-warning gap-1 font-bold text-xs">
                          ★ {volumeInfo.averageRating}
                        </div>
                      )}
                    </div>

                    {/* Book Thumbnail & Info */}
                    <div className="flex gap-4 my-2">
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={volumeInfo.title}
                          className="w-20 h-28 object-cover rounded-md shadow-md shrink-0"
                        />
                      ) : (
                        <div className="w-20 h-28 bg-base-300 rounded-md flex items-center justify-center text-xs text-base-content/50 shrink-0">
                          No Cover
                        </div>
                      )}

                      <div className="space-y-1">
                        <h2 className="card-title text-base font-bold text-base-content line-clamp-2">
                          {volumeInfo.title}
                        </h2>
                        <p className="text-xs text-base-content/70">
                          {volumeInfo.authors?.join(", ")}
                        </p>
                        <p className="text-xs text-base-content/50">
                          {volumeInfo.publishedDate?.split("-")[0]} •{" "}
                          {volumeInfo.publisher}
                        </p>
                      </div>
                    </div>

                    {/* Description Snippet */}
                    {volumeInfo.description && (
                      <p className="text-xs text-base-content/70 line-clamp-3 mt-2">
                        {volumeInfo.description}
                      </p>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="card-actions justify-between items-center bg-base-200/50 px-6 py-3 border-t border-base-200">
                    <span className="font-bold text-sm text-primary">
                      {price}
                    </span>
                    <a
                      href={volumeInfo.previewLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs btn-accent btn-outline"
                    >
                      Preview Book
                    </a>
                    <button
                      className="btn btn-active btn-accent btn-xs transition-all hover:brightness-125"
                      onClick={() => remove(book.id)}
                    >
                      {" "}
                      remove{" "}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State Alert */
          <div className="card bg-base-100 border border-base-300 shadow-lg text-center p-12">
            <div className="max-w-md mx-auto space-y-4">
              {/* books emoji character unicode code point: U+1F4DA */}
              <div className="text-5xl">📚</div>
              <h3 className="text-xl font-bold text-base-content">
                No Books to Display
              </h3>
              <p className="text-sm text-base-content/60">
                You cleared the list of books. Click below to restore the Google
                Books dataset.
              </p>
              <button onClick={reset} className="btn btn-primary btn-sm mt-2">
                Restore Books
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Books;
