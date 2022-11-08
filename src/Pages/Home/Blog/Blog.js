import React from 'react';

const Blog = () => {
    return (
        <div className='mb-40'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between sql and nosql
                </div>
                <div className="collapse-content">
                    <p>SQL is the programming language used to interface with relational databases.
                        (Relational databases model data as records in rows and tables with logical links between them).
                        NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how dose it work?
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and
                        self-contained way for securely transmitting information between parties as a ...

                        JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA)
                        which safeguards them from being modified by the client or an attacker. Stored only on
                        the client: You generate JWTs on the server and send them to the client. The client then </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between Javascript  and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript
                        Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the
                        JavaScript programming language.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How dose NodeJS handle multiple request at the same time?
                </div>
                <div className="collapse-content">
                    <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into
                        EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop
                        which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;