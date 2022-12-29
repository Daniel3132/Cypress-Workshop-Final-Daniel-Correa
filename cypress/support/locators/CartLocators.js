export const CartLocators = {
    cartUrl: '/cart.html',
    placeOrderButton: '.btn.btn-success',
    product: (id) => {
        return `.hrefch[href="prod.html?idp_=${id}"]`
    },
    addProductBtn: '.btn-success',
    addAlertMssg: 'Product added',
    cartTable: '#tbodyid',
    purchaseForm: {
        purchaseBtn: '[onclick="purchaseOrder()"]'
    },
    sucessPurchaseAlert: '.sweet-alert.showSweetAlert.visible',
    deleteProductBtn: 'td > a'
}