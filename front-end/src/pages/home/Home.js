/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useGetRandomUsers } from './../../hooks/useGetRandomUsers';
import { useContext } from 'react';
import { GlobalContext } from './../../context/GlobalContext';
import { Header } from "../../components/header/Header";
import { CardUserRandom } from "../../components/card-random/CardUserRandom";
import { Spinner } from './../../components/spinner/Spinner';
import { EmptyCard } from './../../components/emptyCard/emptyCard';
import { Search } from "../../components/Search/Search";
import { StyledRandomSearch, StyledHome } from "./styles";
import { Pagination } from "../../components/pagination/Pagination";
import { useProtectedPage } from './../../hooks/useProtectedpage';

export const Home = () => {

    useProtectedPage()

    const [randomUsersList, setRandomUsersList] = useState([])
    const { loading, setLoading } = useContext(GlobalContext);
    const [page, setPage] = useState(0)
    const [input, setInput] = useState("")
    const [offset, setOffset] = useState(0)
    const limitTotal = 1000
    const limitUsers = 30;

    useEffect(() => {
        setLoading(true);
        (async () => {

            try {
                const data = await useGetRandomUsers(page, limitUsers )        
                setRandomUsersList(data.results)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }

        })()
    }, [offset, page, setLoading])

    const onChangeInput = (ev) => {
        setInput(ev.target.value)
    }

    const CardRandomUser =
        randomUsersList &&
        randomUsersList.filter(user => {
            return user.name.first.toLowerCase().includes(input.toLowerCase()) || user.email.toLowerCase().includes(input.toLowerCase())
        })
            .map((user, index) => {
                return (
                    <CardUserRandom
                        key={index}
                        age={user.dob.age}
                        email={user.email}
                        name={user.name}
                        image={user.picture.large}
                        dob={user.dob}
                        id={user.id}
                    />
                );
            });
    return (
        <StyledHome>
            <Header />
            <StyledRandomSearch>
                <Search
                    dataProps={{
                        input,
                        onChangeInput
                    }}
                />
            </StyledRandomSearch>
            <div className="contayner my-1 py-1 mb-2">
                {loading && <Spinner />}
                <div className="row justify-content-center">

                    {!loading && randomUsersList && randomUsersList.length === 0 && (
                        <EmptyCard />
                    )}
                    {!loading && randomUsersList && randomUsersList.length > 0 && CardRandomUser}
                </div>
            </div>
            <Pagination limit={limitUsers} totalPages={limitTotal} offset={offset} setOffset={setOffset} setPage={setPage} />
        </StyledHome>
    )
}

