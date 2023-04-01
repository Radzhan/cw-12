import React, {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import { AuthorPhoto} from '../../store/GallerySlice';
import { getAllPhotoAuthor} from '../../store/GalleryThunks';
import CardPhoto from '../../components/CardPhoto/CardPhoto';
import {useParams} from 'react-router-dom';

const AuthorPage = () => {
	const {author} = useParams();
	const {id} = useParams();
	const arrayWithPhoto = useAppSelector(AuthorPhoto);
	const dispatch = useAppDispatch();

	const requestArtist = useCallback(async () => {
		await dispatch(getAllPhotoAuthor(id!));
	}, [dispatch]);

	useEffect(() => {
		requestArtist().catch(console.error);
	}, [requestArtist]);

	const createCard = arrayWithPhoto.map((element) => {
		return <CardPhoto key={element._id} currentId={element._id} author={element.author} title={element.title} image={element.image}/>
	});

	return <div>
		<h2>{author}</h2>
		{ arrayWithPhoto.length !== 0 ? createCard : <h2>Sorry no photo !</h2>}
	</div>;
};

export default AuthorPage;``