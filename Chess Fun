#include <stdbool.h>

bool chess_board_cell_color(const char* cell1, const char *cell2)
{
		// if the value of both axis are even or odd, then the cell is dark.
    // if one axis value is even and the other odd, then the cell is light.
    // the below tests for darkness of each cell (true if dark).
    // e.g. true == true (both dark)
    // e.g. false != true (one is light, the other dark
    if ((cell1[0] % 2 == cell1[1] % 2) == (cell2[0] % 2 == cell2[1] % 2)) {
    	return true;
    } else {
    	return false;
    }
}
