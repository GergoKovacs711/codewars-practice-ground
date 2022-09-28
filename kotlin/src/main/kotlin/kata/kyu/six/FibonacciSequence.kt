package kata.kyu.six

/**
 * You need to create a fibonacci function that given a signature array/list, returns the first n elements - signature
 * included of the so seeded sequence.
 *
 * https://www.codewars.com/kata/556deca17c58da83c00002db/train/kotlin
 */

// Mine
//fun tribonacci(signature: DoubleArray, n: Int): DoubleArray {
//    if (n == 0) return DoubleArray(0)
//    val result = DoubleArray(n)
//    for ((index, _) in result.withIndex()) {
//        if(index < 3) {
//            result[index] = signature[index]
//            continue
//        }
//        result[index] = result[index - 1] + result[index - 2] + result[index - 3]
//    }
//    return result
//}

// Others //

// *signature for spreading signature: DoubleArray into vararg Double type (typescript ...signature)
//tailrec fun tribonacci(signature: DoubleArray, n: Int): DoubleArray = when (n) {
//    0 -> doubleArrayOf()
//    in 1 until signature.size -> signature.take(n).toDoubleArray()
//    signature.size -> signature
//    else -> tribonacci(doubleArrayOf(*signature, signature.takeLast(3).sum()), n)
//}

// Clever!
fun tribonacci(signature: DoubleArray, n: Int) = generateSequence(Triple(signature[0], signature[1], signature[2])) {
    Triple(it.second, it.third, it.first + it.second + it.third)
}
    .map { it.first }
    .take(n)
    .toList()
    .toDoubleArray()

// an optimised, idiomatic solution to which mine is similar to
//fun tribonacci(signature: DoubleArray, n: Int) = DoubleArray(n).also {
//    for(i in 0 until n)
//        it[i] = if(i < signature.size) signature[i] else it[i - 1] + it[i - 2] + it[i - 3]
//}