const encadeamento = arr =>
    arr
        .filter(n => n % 2 === 0)
        .map(n => n * 2)
        .reduce((acc, n) => acc + n, 0);