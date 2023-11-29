/* 
	Section A
	Question 1
	Name: Tan Chan Lim
	Admin No: p1234567
	Class: DIT1B01
	
*/

let gifts = [
	{
		id: 0,
		name: 'John',
		relation: 'Brother',
		gift: 'jersey',
		greeting: 'Runnin Christmas'
	},
	{
		id: 1,
		name: 'Candice',
		relation: 'Sister',
		gift: 'portable fan',
		greeting: 'Breeze Christmas'
	},
	{
		id: 2,
		name: 'Fat Daddy',
		relation: 'Father',
		gift: 'T-Shirt',
		greeting: 'Fitting Christmas'
	},
	{
		id: 3,
		name: 'Love Mommy',
		relation: 'Mother',
		gift: 'grinder',
		greeting: 'Delicious Christmas'
	},
	{
		id: 4,
		name: 'Christina',
		relation: 'Aunt',
		gift: 'Sling Bags',
		greeting: 'Joyous Christmas'
	},

];

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
function myGifts() {
	// TODO: Code here
	giftItem = [];

	return {
		// TODO: Code here
		addItem: function (gItem) {
            giftItem.push(gItem);
        },

		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
		delItem: function (itemIndex) {
            giftItem.splice(itemIndex, 1);
        },

		getNoofGift: function () {
            return giftItem.length ;
        },

        greetingMessage: function (giftTo) {
            return 'Hi ' + giftItem[giftTo].relation + ' has a ' + giftItem[giftTo].greeting;
        },

        updateGreeting: function (itemIndex, updgiftmessage) {
            giftItem[itemIndex].greeting = updgiftmessage;
        }
	}
}

// Display all the greeting message.
// TODO: Code here

const toGift = myGifts();

gifts.forEach((element) => toGift.addItem(element));

for (let i = 0; i < toGift.getNoofGift(); i++) {
    console.log(toGift.greetingMessage(i));
}