# Make a Transfer with allowed block permissions 

This transactions shows you how to add a nonce and a valid length of blocks a transaction is valid for. 

This is important because as an account drops below the exsistential limit (0.1 dots) it gets pruned from the state tree. If it is added back its nonce starts at 0 again and is now vulnerable to replay attacks.  
