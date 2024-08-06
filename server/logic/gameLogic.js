const boostEnergy = (user) => {
    user.energy += 10;
    return user.save();
};

const tapAction = (user) => {
    user.taps += 1;
    user.energy -= 1; // or any other logic
    return user.save();
};

module.exports = {
    boostEnergy,
    tapAction,
};
