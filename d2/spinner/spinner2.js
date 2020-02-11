let arr = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "]
for (let i = 0; i < 9; i++) { setTimeout(() => { process.stdout.write(arr[i]); }, 200 + (i*300)); }




