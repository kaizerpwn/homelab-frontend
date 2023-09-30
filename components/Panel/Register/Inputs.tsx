interface InputProps {
    texts: {
        name: string;
        surname: string;
        email: string;
        password: string;
        city: string;
    }
    handleChange: (e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >) => void;
    handleEnter: (e: React.KeyboardEvent) => void;
}

const Inputs = ({ texts, handleChange, handleEnter }: InputProps) => {
    return (
        <>
            <div className="space-y-2">
                <label className="block text-sm">First name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onKeyDown={handleEnter}
                    placeholder="Insert your first name.."
                    value={texts.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md border-gray-800/40 bg-gray-800/40 text-gray-200 outline-none"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm">Surname</label>
                <input
                    type="email"
                    name="surname"
                    id="surname"
                    onKeyDown={handleEnter}
                    placeholder="Insert your surname.."
                    value={texts.surname}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md border-gray-800/40 bg-gray-800/40 text-gray-200 outline-none"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm">Email address</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onKeyDown={handleEnter}
                    placeholder="yourmail@homelab.com"
                    value={texts.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md border-gray-800/40 bg-gray-800/40 text-gray-200 outline-none"
                />
            </div>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <label className="text-sm">Password</label>
                </div>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onKeyDown={handleEnter}
                    placeholder="********"
                    value={texts.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md border-gray-800/40 bg-gray-800/40 text-gray-200 outline-none"
                />
            </div>
        </>
    );
}

export default Inputs;