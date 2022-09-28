package kata.kyu.eight

import org.junit.Assert.assertEquals
import org.junit.Test


class GrassHopperTest {
    @Test
    fun test1() {
        assertEquals(1, summation(1))
    }
    @Test
    fun test2() {
        assertEquals(36, summation(8))
    }
}