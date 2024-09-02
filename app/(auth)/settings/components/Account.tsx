const AccountSettings: React.FC<{ data: any }> = ({ data }) => {

    console.log('Account Data:', data);
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Account Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <p>{data?.account?.first_name}</p>
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <p>{data.account.last_name}</p>
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <p>{data.account.email}</p>
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <p>{data.account.phone}</p>
          </div>
          <div>
            <label className="block text-gray-700">Gender</label>
            <p>{data.account.gender}</p>
          </div>
          <div>
            <label className="block text-gray-700">Account Type</label>
            <p>{data.account?.type?.label}</p>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Skills</h2>
        <div className="flex flex-wrap">
          {data.jobSkills.slice(0,10).map((skill:any) => (
            <span key={skill.id} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full mr-2 mb-2">
              {skill.name}
            </span>
          ))}
        </div>
  
        <h2 className="text-xl font-semibold mt-6 mb-4">Tags</h2>
        <div className="flex flex-wrap">
          {data.jobTags.slice(0,5).map((tag:any) => (
            <span key={tag.id} className="bg-green-100 text-green-700 px-3 py-1 rounded-full mr-2 mb-2">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
export default AccountSettings;