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
