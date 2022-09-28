package kata.kyu.six

//fun toInt(char: Char) = when (char) {
//    'w' -> 4
//    'p' -> 3
//    'b' -> 2
//    's' -> 1
//    'm' -> -4
//    'q' -> -3
//    'd' -> -2
//    'z' -> -1
//    else -> 0
//}

// Mine
//fun alphabetWar(fight: String) : String {
//    val afterTheBombing = fight.toCharArray()
//    for((index, char) in fight.withIndex()) {
//        if(char == '*') {
//            if(index != 0) afterTheBombing[index - 1] = '_'
//            if(index + 1 < fight.length) afterTheBombing[index + 1] = '_'
//            afterTheBombing[index] = '_'
//        }
//    }
//    return when(afterTheBombing.sumOf(::toInt)) {
//        0 -> "Let's fight again!"
//        in 1 until 10000 -> "Left side wins!"
//        else -> "Right side wins!"
//    }
//}

// found + optimised by me
//fun alphabetWar(fight: String): String {
//    return fight.replace(Regex("[a-z]?\\*+[a-z]?"), "")
//        .sumOf {
//            val leftSide = "sbpw"
//            val rightSide = "zdqm"
//            when (it) {
//                in leftSide -> leftSide.indexOf(it) + 1
//                in rightSide -> -1 * (rightSide.indexOf(it) + 1)
//                else -> 0
//            }
//        }
//        .let {
//            when {
//                it > 0 -> "Left side wins!"
//                it < 0 -> "Right side wins!"
//                else -> "Let's fight again!"
//            }
//        }
//}

// More optimisation
//fun alphabetWar(fight: String): String = fight.mapIndexed { index, char ->
//    val bomb = '*'
//    val sides = "wpbs*zdqm"
//    if (char != bomb) {
//        if (fight.getOrNull(index - 1) != bomb && fight.getOrNull(index + 1) != bomb) {
//            return@mapIndexed sides.indexOf(char) - 4
//        }
//    }
//    return@mapIndexed 0
//}
//    .sum()
//    .let {
//        when {
//            it < 0 -> "Left side wins!"
//            it > 0 -> "Right side wins!"
//            else -> "Let's fight again!"
//        }
//    }



// Best solution (found)
fun alphabetWar(fight: String) = fight.applyBombs().reduceToScore().decideWinner()

private fun String.applyBombs() = replace(Regex("""\w?\*\w?"""), "")
private const val sides = "wpbs*zdqm" 
private fun String.reduceToScore() = filter { it in sides }.map { sides.indexOf(it) - 4 }.sum()
private fun Int.decideWinner() = when {
    this < 0 -> "Left side wins!"
    this > 0 -> "Right side wins!"
    else -> "Let's fight again!"
}




