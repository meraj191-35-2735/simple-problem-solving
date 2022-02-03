function bestFriend(friends) {
    let largestName = friends[0];
    for (let friend of friends) {
        if (friend.length > largestName.length) {
            largestName = friend;
        }
    }
    return largestName;
}
let cottageMembers = ["Sohan", "Koushik", "Nafis", "Shoron", "Durjoy"];
let largestName = bestFriend(cottageMembers);
console.log(largestName);