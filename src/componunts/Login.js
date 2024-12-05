import { useActionState } from "react/cjs/react.production"

export default function Login() {
    cost [useFormState, formAction] = useActionState(login, null)

    return (
        <div className="flex flex-col w-[2rem] h-[10rem] border border-[#D3DEE8]">
            <p>log in på din konto</p>
            <form action="" method="post">
                <label htmlFor="">email</label>
                <input type="email" className="border border-[#D3DEE8]" name="identifier"/>
                <label htmlFor="">password</label>
                <input type="password" className="border border-[#D3DEE8]" name="password" />
                <button>log in</button>
            </form>
            <p>log in med</p>
            <ul>
                <li>
                    <a>google</a>
                </li>
                <li>
                    <a>facebook</a>
                </li>
                <li>
                    <a>twitter</a>
                </li>
            </ul>

        </div>
    )
}