"use client";

import React, { useEffect, useState } from "react";
import styles from "./ArticleItem.module.css"; // A separate CSS module for articles if needed
import Pagination from "@/media/MediaComponents/Pagination";
import ArticleItem from "./articlesComponents/ArticleItem";
import { articleData } from "./articlesComponents/ArticleData";
import Link from "next/link";
import CustomLink from "@/components/CustomLink";

const ITEMS_PER_PAGE = 6; // Number of articles per page

const Articles: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transitionStage, setTransitionStage] = useState<"idle" | "out" | "in">(
    "idle"
  );
  const [pendingPage, setPendingPage] = useState(currentPage);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const totalPages = Math.ceil(articleData.length / ITEMS_PER_PAGE);

  useEffect(() => {
    articleData.forEach((article) => {
      console.log(article.title);
    });
    if (transitionStage === "out") {
      const timer = setTimeout(() => {
        setTransitionStage("in");
        setCurrentPage(pendingPage);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [transitionStage, pendingPage]);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      setPendingPage(page);
      setDirection(page > currentPage ? "forward" : "backward");
      setTransitionStage("out");
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = articleData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const getClassName = (): string => {
    if (transitionStage === "out") {
      return direction === "forward"
        ? styles.pageSlideOutForward
        : styles.pageSlideOutBackward;
    } else if (transitionStage === "in") {
      return direction === "forward"
        ? styles.pageSlideInForward
        : styles.pageSlideInBackward;
    } else {
      return "";
    }
  };

  return (
    <main className="bg-slate-200">
      <div className="text-center py-16 ">
        <p className="text-3xl ">
          Explore our latest articles and industry insights.
        </p>
        <p className="mt-16 text-gray-600 font-thin">
          Stay informed with the latest news and articles that reflect our
          commitment to excellence in security services.
        </p>
        <CustomLink
          className="text-blue-600 underline hover:text-blue-800 transition duration-300 inline-block cursor-pointer"
          href="/media"
        >
          View Media
        </CustomLink>
      </div>
      <section aria-label="Articles Section" className="container mx-auto px-4">
        <div
          className={`grid mx-auto w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8 justify-center items-center ${getClassName()}`}
        >
          {currentItems.map(
            (
              item: {
                title: string;
                slug: string;
                description: string;
                date: string;
                content: any;
              },
              index: any
            ) => (
              <article
                key={`${item.title}-article-item-${index}`}
                className="h-full w-fit"
                aria-labelledby={`article-item-title-${item.title}`}
              >
                <ArticleItem
                  slug={item.slug}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  content={item.content}
                  id={`article-item-id-${index}`}
                />
              </article>
            )
          )}
        </div>
      </section>

      <nav
        aria-label="Pagination Navigation"
        className="container mx-auto px-4 mt-4"
      >
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </nav>
    </main>
  );
};

export default Articles;
