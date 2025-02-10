async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

async function UserPage({ params }) {
    const { id } = await params
    const user = await getUser(id)

    const jobs = [{
        id: 1,
        job: "Web designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
    },
    {
        id: 2,
        job: "Developer",
        description: "Sed vel lorem et erat tincidunt tincidunt. Fusce vehicula, justo eget ultricies fermentum, velit neque facilisis turpis, non gravida erat magna a risus."
    },
    {
        id: 3,
        job: "Tester",
        description: "Vivamus pharetra purus id mauris cursus, nec luctus odio volutpat."
    },
    {
        id: 4,
        job: "Developer",
        description: "Integer at nunc vitae ex facilisis convallis."
    },
    {
        id: 5,
        job: "Developer Sr",
        description: "Curabitur auctor, metus ac malesuada volutpat, metus purus varius purus, et tincidunt nisl nulla ut velit."
    },
    {
        id: 6,
        job: "CM",
        description: "Aenean suscipit felis id ipsum scelerisque, sed vestibulum nisl vehicula."
    },
    {
        id: 7,
        job: "QA",
        description: "Sapien luctus, malesuada volutpat. Orci velit tincidunt lacus ."
    },
    {
        id: 8,
        job: "Technical support",
        description: "Donec eget justo sit amet sapien luctus pellentesque."
    },
    {
        id: 9,
        job: "SM",
        description: "Lorem ipsu justo sit amet sapien luctus nisl vehicula."
    },
    {
        id: 10,
        job: "Backend Developer",
        description: "Vestibulum euismod, purus sit amet egestas rhoncus, orci velit tincidunt lacus, sit amet egestas libero nisi non ligula"
    }
    ]


    return (
        <div className="bg-slate-400 max-w-sm rounded-md overflow-hidden shadow-lg">
            <img className="w-full sm:w-1/2" src={user.avatar} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{user.first_name} {user.last_name}</div>
                <p className="text-white text-base">
                    {user.email}
                </p>
                <p className="text-gray-700 text-base">
                    {jobs[user.id].description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{jobs[user.id].job}</span>
            </div>
            <div className="flex flex-row-reverse ">
                <img className="w-10 h-10 rounded-full mr-4" src={user.avatar} alt="" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{user.first_name} {user.last_name}</p>
                    </div>
            </div>
        </div>
    )
}

export default UserPage;