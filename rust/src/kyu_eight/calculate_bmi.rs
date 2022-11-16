fn bmi(weight: u32, height: f32) -> &'static str {
    let bmi = weight as f32 / (height * height ) ;
    return match bmi {
        _ if bmi <= 18.5 => "Underweight",
        _ if bmi <= 25.0 => "Normal",
        _ if bmi <= 30.0 => "Overweight",
        _ => "Obese",
    };
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn basic_tests() {
        assert_eq!(bmi(50, 1.80), "Underweight");
        assert_eq!(bmi(80, 1.80), "Normal");
        assert_eq!(bmi(90, 1.80), "Overweight");
        assert_eq!(bmi(110, 1.80), "Obese");
    }
}
