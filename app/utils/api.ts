import { headersWithToken } from "./auth";

export const baseurl = 'https://main.localsjob.com/api/v1';

export const getExperiences = async () => {

    try {
        const headers = headersWithToken();
        const res = await fetch(`${baseurl}/account/experiences`, {
            method: "GET",
            headers: headers,
        });
        
        const data = await res.json();
        return data;
    } catch (err) {
        console.log("Error", err);
        return;
    }
}
    
export const getEducations = async () => {
    
        try {
            const headers = headersWithToken();
            const res = await fetch(`${baseurl}/account/educations`, {
                method: "GET",
                headers: headers,
            });
            
            const data = await res.json();
            return data;
        } catch (err) {
            console.log("Error", err);
            return;
        }
}
    
export const getSkills = async () => {
    
        try {
            const headers = headersWithToken();
            const res = await fetch(`${baseurl}/account/skills`, {
                method: "GET",
                headers: headers,
            });
            
            const data = await res.json();
            return data;
        } catch (err) {
            console.log("Error", err);
            return;
        }
}

export const getAccountSettings = async () => {
        
            try {
                const headers = headersWithToken();
                const res = await fetch(`${baseurl}/account/settings`, {
                    method: "GET",
                    headers: headers,
                });
                
                // const data = await res.json();
                return res.json();
            } catch (err) {
                console.log("Error", err);
                return;
            }
}
    
export const updateAccountSettings = async (data:any) => {
        
            try {
                const headers = headersWithToken();
                const res = await fetch(`${baseurl}/account/settings`, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(data)
                });
                
                const response = await res.json();
                return response;
            } catch (err) {
                console.log("Error", err);
                return;
            }
}

export const changePassword = async (data: any) => {


            
                try {
                    const headers = headersWithToken();
                    const res = await fetch(`${baseurl}/account/security`, {
                        method: "POST",
                        headers: headers,
                        body: data
                    });
                    
                    const response = await res.json();
                    return response;
                } catch (err) {
                    console.log("Error", err);
                    return;
                }
}
    
export const appliedJobs = async () => {
                    try {
                        const headers = headersWithToken();
                        const res = await fetch(`${baseurl}/account/applied-jobs`, {
                            method: "GET",
                            headers: headers,
                        });
                        
                        const data = await res.json();
                        return data;
                    } catch (err) {
                        console.log("Error", err);
                        return;
                    }
}
    
export const savedJobs = async () => {
                    try {
                        const headers = headersWithToken();
                        const res = await fetch(`${baseurl}/account/saved-jobs`, {
                            method: "GET",
                            headers: headers,
                        });
                        
                        const data = await res.json();
                        return data;
                    } catch (err) {
                        console.log("Error", err);
                        return;
                    }
}

export const deleteAccount = async () => {
    
        try {
            const headers = headersWithToken();
            const res = await fetch(`${baseurl}/account/delete`, {
                method: "DELETE",
                headers: headers,
            });
            
            const response = await res.json();
            return response;
        } catch (err) {
            console.log("Error", err);
            return;
        }
}


export const getBlogs = async () => {
        
            try {
                const headers = headersWithToken();
                const res = await fetch(`${baseurl}/account/blogs`, {
                    method: "GET",
                    headers: headers,
                });
                
                const data = await res.json();
                return data;
            } catch (err) {
                console.log("Error", err);
                return;
            }
}
    
export const applyJob = async (data:any) => {
        
            try {
                const headers = headersWithToken();
                const res = await fetch(`${baseurl}/job/apply`, {
                    method: "POST",
                    headers: headers,
                    body: data
                });
                
                const response = await res.json();
                return response;
            } catch (err) {
                console.log("Error", err);
                return;
            }
}