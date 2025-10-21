interface statisticProps {
    data: number
}

export const ShowStatistic = ({ data }: statisticProps) => {
    return (
        <div>
            { data}
        </div>
    );
}
