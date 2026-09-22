function logging (message, ...details) {
    console.log(`Log: ${message}`);

    for (const detail of details) {
        console.log(" -> ",detail);
    }
}

logging("server started.....");
logging("payment failed",102,"upi",1500);
logging("user logged in",200);






