import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa';

const CaesarCipher = () => {
    const [text, setText] = useState('');
    const [key, setKey] = useState(3);
    const [result, setResult] = useState('');
    const [isEncrypt, setIsEncrypt] = useState(true);

    const encrypt = (text, key) => {
        return text
            .split('')
            .map((char) => {
                const charCode = char.charCodeAt(0);
                if (charCode >= 65 && charCode <= 90) {
                    return String.fromCharCode(((charCode - 65 + key) % 26) + 65);
                } else if (charCode >= 97 && charCode <= 122) {
                    return String.fromCharCode(((charCode - 97 + key) % 26) + 97);
                } else {
                    return char;
                }
            })
            .join('');
    };

    const decrypt = (text, key) => {
        return encrypt(text, 26 - key); // Caesar şifresinin çözülmesi, şifreleme anahtarıyla ters yönde bir kaydırmayla gerçekleşir
    };

    const handleEncryptDecrypt = () => {
        if (isEncrypt) {
            setResult(encrypt(text, key));
        } else {
            setResult(decrypt(text, key));
        }
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(result);
    };

    return (
        <div className="container mx-auto mt-8 p-8 bg-gray-200 max-w-md rounded-md bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4 text-white">Caesar Cipher</h2>
            <label className="block mb-2">
                Text:
                <textarea
                    className="w-full p-2 border rounded resize-none"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
            <label className="block mb-2">
                Key:
                <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={key}
                    onChange={(e) => setKey(parseInt(e.target.value))}
                />
            </label>
            <label className="block mb-4">
                <input
                    type="checkbox"
                    checked={isEncrypt}
                    onChange={() => setIsEncrypt(!isEncrypt)}
                    className="mr-2"
                />
                Encrypt
            </label>
            <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                onClick={handleEncryptDecrypt}
            >
                {isEncrypt ? 'Encrypt' : 'Decrypt'}
            </button>
            {result && (
                <div className="mt-4">
                    <strong>Result:</strong>
                    <div className="border p-2 rounded mt-2 bg-gray-300 flex justify-between bg-opacity-50">

                        <div>
                            {result}
                        </div>
                        <div>
                            <span className="cursor-pointer text-blue-500" onClick={handleCopyToClipboard}>
                                <FaClipboard className="inline-block" />
                            </span>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default CaesarCipher;
