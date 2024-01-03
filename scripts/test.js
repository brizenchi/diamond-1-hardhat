


async function main() {
//   it("Should return the new greeting once it's changed", async function() {
    const diamondAddress = "0xc09F15f33fc9b1Fe4C15FC93ea96A2cb78FD0D22";
    const myContract = await ethers.getContractAt("FacetA", diamondAddress);

    var mintToken = await myContract.getDataA();
    console.log("Trx s_lastRequestId:", mintToken);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });