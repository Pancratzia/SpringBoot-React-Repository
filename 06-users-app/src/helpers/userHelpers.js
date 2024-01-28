export const generateRandomId = () => {
    const randomId = new Date().getTime();
    const randomIdArray = randomId.toString().split("");
    return randomIdArray.splice(0, 5);
}