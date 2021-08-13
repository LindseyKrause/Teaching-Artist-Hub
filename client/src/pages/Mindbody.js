import React from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import FriendList from '../components/FriendList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

const Mindbody = () => {
    const { loading, data } = useQuery(QUERY_THOUGHTS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const thoughts = data?.thoughts || [];

    const loggedIn = Auth.loggedIn();
    console.log(userData);
    return (
        <main>
            <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
            <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="ea1646006627" data-widget-version="1" ></healcode-widget>
                )}
            </div>
            {loggedIn && userData ? (
                <div className="col-4 col-lg-3 mb-3">
                    <FriendList
                        username={userData.me.username}
                        friendCount={userData.me.friendCount}
                        friends={userData.me.friends}
                    />
                </div>
            ) : null}
        </main>
    );
};

export default Mindbody;
