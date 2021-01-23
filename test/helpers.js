/* eslint-disable no-undef */
export const tokens = (n) => {
    return new web3.utils.toBN(
       web3.utils.toWei(n.toString(), 'ether')
    )
}