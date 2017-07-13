// PartsOfAList.c
//

#include "stdafx.h"

#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct Pair Pair;
struct Pair {
	char* first;
	char* snd;
};

Pair** partlist(char** arr, int sz) {

	Pair * currPair, * list;
	char * string1, * string2;
	int i, j;

	list = (Pair*)malloc(sizeof(Pair)* (sz - 1));

	for (i = 0; i < (sz-1); i++) {

		currPair = &list[i];
		string1 = (char *)malloc(1000);
		string2 = (char *)malloc(1000);
		strcpy(string1, "");
		strcpy(string2, "");

		for (j = 0; j <= i; j++) {
			if (j > 0) {
				strcat(string1, " ");
			}
			strcat(string1, (char*)arr[j]);
		}

		for (j = i + 1; j < sz; j++) {
			if (j > (i + 1)) {
				strcat(string2, " ");
			}
			strcat(string2, (char*)arr[j]);
		}

		currPair->first = string1;
		currPair->snd = string2;
	}

	return (Pair**)&list;
}

int main()
{
	const int sz = 5;
	int i;
	char * s[5] = { "Testing", "this", "challenging", "coding", "exercise" };
	Pair ** outList, * list;

	outList = partlist(s, sz);
	list = *outList;

	for (i = 0; i < (sz - 1); i++) {
		printf("%s\n", (char*)list[i].first);
		printf("%s\n", (char*)list[i].snd);
		free(list[i].first);
		free(list[i].snd);

	}
	free(list);
	
    return 0;
}
