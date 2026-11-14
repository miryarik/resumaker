export function getBullets(text) {
    // split the text string at "-"
    // return an array of the string parts
    return text
        .split("->")
        .filter((p) => p.length > 0)
        .map((p) => {
            return p.trim();
        });
}

export function withProtocol(url) {
    // links are often typed without a scheme, e.g. "github.com/john"
    const trimmed = url.trim();
    return /^[a-z][a-z0-9+.-]*:/i.test(trimmed) ? trimmed : "https://" + trimmed;
}
