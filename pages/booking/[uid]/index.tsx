import { GetServerSidePropsContext } from "next";

export default function Booking({ uid }: ReturnType<typeof getServerSideProps>['props']) {

    return 'Booking ' + uid
}


export const getServerSideProps = ({ params }: GetServerSidePropsContext<{ uid: string }>) => {
    console.log('getServerSideProps called');

    return {
        props: {
            uid: params?.uid
        }
    }
}