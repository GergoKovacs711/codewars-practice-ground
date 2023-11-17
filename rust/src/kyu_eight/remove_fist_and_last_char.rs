/**
 * It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
 * You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 *
 *
 *  https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/rust
 */
pub fn remove_char(s: &str) -> String {
    let chars = s.chars();
    let max_length = s.len() - 1;
    let mut counter: usize = 0;
    return chars
        .skip(1)
        .take_while(|_| {
            counter = counter + 1;
            counter < max_length
        })
        .collect();
    // this also works
    // return s[1..s.len() - 1].to_string();
}

#[cfg(test)]
mod tests {
    use super::remove_char;

    #[test]
    fn sample_cases() {
        assert_eq!(remove_char("eloquent"), "loquen");
        assert_eq!(remove_char("country"), "ountr");
        assert_eq!(remove_char("person"), "erso");
        assert_eq!(remove_char("place"), "lac");
        assert_eq!(remove_char("ok"), "");
        assert_eq!(remove_char("ooopsss"), "oopss");
    }
}
