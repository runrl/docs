import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="RunRL Logo"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" rx="4" fill="#4F46E5" />
          <path d="M7 7h4v4h-4z M13 7h4v4h-4z M7 13h4v4h-4z M13 13h4v4h-4z" fill="white" />
        </svg>
        RunRL
      </>
    ),
  },
};
