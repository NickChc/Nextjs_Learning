"use client";
import {
  PropsWithChildren,
  useEffect,
  useRef,
  useCallback,
  MouseEventHandler,
} from "react";
import { useRouter } from "next/navigation";

export function Modal({ children }: PropsWithChildren) {
  const router = useRouter();
  const overlayRef = useRef(null);
  const wrapperRef = useRef(null);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlayRef.current || e.target === wrapperRef.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlayRef, wrapperRef]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 bottom-0 right-0 left-0 mx-auto z-10 p-10 bg-black/60 "
      onClick={onClick}
    >
      <div
        ref={wrapperRef}
        className="absolute h-[50dvh] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden "
      >
        {children}
      </div>
    </div>
  );
}
