try {
    const x = 10;
    const y = 0;
    const result = x / y;
    console.log("Result", result);
} catch (error) {
    console.error("an err occured ", error);
} finally {
    console.log("block always executes.")
}