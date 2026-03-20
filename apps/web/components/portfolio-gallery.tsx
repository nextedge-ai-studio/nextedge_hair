"use client";

import { useEffect, useState } from "react";

import type { PortfolioItem } from "@nextedge/schemas";

export function PortfolioGallery({ items }: { items: PortfolioItem[] }) {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeItem]);

  return (
    <>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveItem(item)}
            className="overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)] text-left transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
          >
            <div
              className="aspect-[5/6] bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-2xl text-[color:var(--text-primary)]">{item.title}</h4>
                <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">{item.tag}</span>
              </div>
              <p className="text-sm leading-7 text-[color:var(--text-secondary)]">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[color:rgba(28,28,28,0.82)] px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveItem(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-hidden border border-[color:rgba(232,224,213,0.35)] bg-[color:var(--bg-primary)] shadow-[var(--shadow-elegant)] lg:grid lg:grid-cols-[1.1fr_0.9fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="min-h-[360px] bg-cover bg-center lg:min-h-[720px]"
              style={{ backgroundImage: `url(${activeItem.image})` }}
            />
            <div className="flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">作品細節</p>
                    <h3 className="mt-3 text-4xl text-[color:var(--text-primary)]">{activeItem.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[color:var(--border-subtle)] text-xl text-[color:var(--text-primary)] transition hover:border-[color:var(--border-strong)]"
                    aria-label="關閉作品集視窗"
                  >
                    ×
                  </button>
                </div>
                <div className="inline-flex border border-[color:var(--border-subtle)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
                  {activeItem.tag}
                </div>
                <p className="text-sm leading-8 text-[color:var(--text-secondary)]">{activeItem.caption}</p>
              </div>

              <div className="mt-8 border-t border-[color:var(--border-subtle)] pt-6">
                <p className="text-sm leading-7 text-[color:var(--text-secondary)]">
                  點擊外部區域或按 `Esc` 可關閉，之後如果要接成 IG 式輪播，可以直接延伸這個 modal。
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
