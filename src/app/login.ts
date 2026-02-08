export function login (username:any , password:any): boolean
{
    if(username&&password)
    {
        return true;
    }
    else
    {
        return false; 
    }
} 