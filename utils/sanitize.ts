import DOMPurify from 'dompurify';

/**
 * Sanitizes an HTML string to prevent XSS attacks.
 * @param html The HTML string to sanitize.
 * @returns The sanitized HTML string.
 */
export const sanitizeHtml = (html: string): string => {
    return DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true },
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li'],
        ALLOWED_ATTR: ['href', 'target', 'rel'],
    });
};

/**
 * Sanitizes a URL to ensure it's safe for navigation.
 * @param url The URL to sanitize.
 * @returns The sanitized URL or '#' if invalid.
 */
export const sanitizeUrl = (url: string): string => {
    try {
        const parsed = new URL(url, window.location.origin);
        if (parsed.protocol === 'javascript:') {
            return '#';
        }
        return parsed.href;
    } catch {
        return '#';
    }
};
