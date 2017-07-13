// #Srot the inner ctnnoet in dsnnieedcg oredr

// You have to sort the inner content of every word of a string in descending order.
// The inner content is the content of a word without first and the last char.

// Some examples :

// "sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me" -> "wiat for me"
// "this kata is easy" -> "tihs ktaa is esay"
// The string will never be null and will never be empty.
// It will contain only lowercase - letters and whitespaces.

#include "stdafx.h"
#include "string.h"
#include "stdlib.h"
#include "search.h"


int compare(const void *arg1, const void *arg2);

char *sortInternal(char *words, int length) {

	char outStr[100] = "";
	char *token[10];
	int i = 0;

	token[0] = strtok(words, " ");

	while (token[i] != NULL) {

		/* Sort chars using Quicksort algorithm: */
		qsort((char *)(token[i])+1, (size_t)(strlen(token[i]))-2, sizeof(char), compare);

		strcat(outStr, token[i]);
		strcat(outStr, " ");

		i += 1;
		token[i] = strtok(NULL, " ");
	}

	outStr[strlen(outStr)-1] = NULL; //replace trailing space with NULL
	strcpy(words, outStr); //put new sorted string in original string's memory space

	return (words);
}

int compare(const void *arg1, const void *arg2)
{
	/* Compare all chars */
	if (*(char*)arg1 == *(char*)arg2) {
		return 0;
	}
	else {
		return (*(char*)arg1 < *(char*)arg2 ? -1 : 1);
	}
}

int main()
{
	
	char myString[] = "tihs ktaa is esay";
	char * sortedStr;
	
	sortedStr = sortInternal(myString, 15);

	printf("In MAIN: output: %s\n\n", sortedStr);
	
	return 0;
}



