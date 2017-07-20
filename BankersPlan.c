#include <math.h>

#define true  1
#define false 0

int fortune(int f0, double p, int c0, int n, double i)
{
  int j, f = f0, c = c0;
  double tempF, tempC;
  
  for (j=0; j<n-1; j++) {
    tempF = f + (p*0.01*f) - c;
    f = tempF - fmod(tempF,1);
    
    tempC = c + (i*0.01*c);
    c = tempC - fmod(tempC,1);
    
    printf("j: %d   n: %d    f: %d\n", j, n, f);
  }
  
  printf("n: %d    f: %d\n", n, f);
  
  if (f > 0) {
    return true;
  } else {
    return false;
  }
}
