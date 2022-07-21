export function sanitizeUrl(url) {
    return url.replace(/[/#]/g, '')
}