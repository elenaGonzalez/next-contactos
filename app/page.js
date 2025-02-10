import Users from "@/components/Users"

async function fetchUser() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data

}

async function Home() {
  const users = await fetchUser()
  
  return (
    <div>
       <Users users={users}/>
       </div>
  );
}

export default Home;