export function scrollToComponentWithoutHistory(owner, refName) {
    if (Array.isArray(owner.$refs[refName])) {
        owner.$refs[refName][0].$el.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    } else if (owner.$refs[refName].$el === undefined) {
        owner.$refs[refName].scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    } else {
        owner.$refs[refName].$el.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
}