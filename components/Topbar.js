import { useRouter } from 'next/router'
import Cookie from 'js-cookie';

const Topbar = () => {
    const router = useRouter();
    const logout=()=> {
  Cookie.remove("emailhabitat");
  router.push("/")
}
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topRight">
          <button className="logout" onClick={logout}>
            se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
