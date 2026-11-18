new Vue(
    data: {
items: ["Laptop", "Mouse"],
cartMessage: "Cart is empty"

},

computed: {
itemCount() {
return this.items.length;

cartMessage() {
return this.items.length
? "Cart is empty"
: "Items are available";

=== 0

}
)