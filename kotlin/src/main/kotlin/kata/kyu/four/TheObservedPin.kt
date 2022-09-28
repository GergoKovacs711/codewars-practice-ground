package kata.kyu.four

fun getPINs(observed: String): List<String> {
    val adjacentMap = mapOf(
        0 to intArrayOf(8),
        1 to intArrayOf(2, 4),
        2 to intArrayOf(1, 3, 5),
        3 to intArrayOf(2, 6),
        4 to intArrayOf(1, 5, 7),
        5 to intArrayOf(2, 4, 6, 8),
        6 to intArrayOf(3, 5, 9),
        7 to intArrayOf(4, 8),
        8 to intArrayOf(0, 5, 7, 9),
        9 to intArrayOf(6, 8),
    )
    val listVisitor = { depth: Int, level: (Int) -> IntArray? ->
    }
    val numbers = observed
        .map { it.digitToInt() }
        .mapNotNull { adjacentMap[it] }
        .let {
            val listIterator = it.iterator()
            listVisitor()
        }
    val arrays = adjacentMap.getOrElse()




    return emptyList()
}
