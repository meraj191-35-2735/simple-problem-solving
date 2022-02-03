function bestFriend(friends) {
    let largestName = friends[0];
    for (let friend of friends) {
        if (friend.length > largestName.length) {
            largestName = friend;
        }
    }
    return largestName;
}
let motherFuckers = ["Sohan", "Koushik", "Nafis", "Shoron", "Durjoy"];
let largestName = bestFriend(motherFuckers);
console.log(largestName);