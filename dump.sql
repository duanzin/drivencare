--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: appointment; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.appointment (
    id integer NOT NULL,
    "patientId" integer,
    "medicId" integer,
    date timestamp without time zone NOT NULL,
    status character varying(255) DEFAULT 'awaiting confirmation'::character varying NOT NULL
);


--
-- Name: appointment_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.appointment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: appointment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.appointment_id_seq OWNED BY public.appointment.id;


--
-- Name: medics; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.medics (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    specialty character varying(255) NOT NULL,
    location character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT LOCALTIMESTAMP(0) NOT NULL
);


--
-- Name: medics_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.medics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: medics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.medics_id_seq OWNED BY public.medics.id;


--
-- Name: patients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.patients (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT LOCALTIMESTAMP(0) NOT NULL
);


--
-- Name: patients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.patients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: patients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.patients_id_seq OWNED BY public.patients.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "patientId" integer,
    "medicId" integer,
    "createdAt" timestamp without time zone DEFAULT LOCALTIMESTAMP(0) NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: appointment id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);


--
-- Name: medics id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medics ALTER COLUMN id SET DEFAULT nextval('public.medics_id_seq'::regclass);


--
-- Name: patients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients ALTER COLUMN id SET DEFAULT nextval('public.patients_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Data for Name: appointment; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: medics; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.medics VALUES (1, 'teste', 'teste@gmail.com', '$2b$10$WR9ze.3fV8/Jn4Hx7RS5neSznqts8HAVVO84Pm7hWmrV0wY4C/KIC', 'teste', 'teste', '2023-04-01 16:44:32');
INSERT INTO public.medics VALUES (2, 'law', 'law@gmail.com', '$2b$10$gECyMrzwt06QQlsmZEH8gO0HgRT4pa0aMKr8PcWWytE4NUfreKd3G', 'law', 'law', '2023-04-02 13:12:21');
INSERT INTO public.medics VALUES (3, 'nicolas', 'nicolas@gmail.com', '$2b$10$/vede5cDcJBaarPjG3tHUufcqODb6OzviHe3.65K1CMzjrvsmQhc6', 'yendry', 'ayudame', '2023-04-02 17:42:33');


--
-- Data for Name: patients; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.patients VALUES (1, 'teste', 'teste@gmail.com', '$2b$10$zVW9UnbP6v3D.XNW6F7cs.QWD2zNNo2hLV.95zc5.naJg0Mmi0o0W', '2023-04-01 16:33:56');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (6, '84eca376-7867-436e-8ca9-4122108feccc', 1, NULL, '2023-04-02 17:33:53');


--
-- Name: appointment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.appointment_id_seq', 1, false);


--
-- Name: medics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.medics_id_seq', 3, true);


--
-- Name: patients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.patients_id_seq', 1, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 6, true);


--
-- Name: appointment appointment_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (id);


--
-- Name: medics medics_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medics
    ADD CONSTRAINT medics_email_key UNIQUE (email);


--
-- Name: medics medics_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medics
    ADD CONSTRAINT medics_pkey PRIMARY KEY (id);


--
-- Name: patients patients_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_email_key UNIQUE (email);


--
-- Name: patients patients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: appointment appointment_medicId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT "appointment_medicId_fkey" FOREIGN KEY ("medicId") REFERENCES public.medics(id);


--
-- Name: appointment appointment_patientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT "appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES public.patients(id);


--
-- Name: sessions sessions_medicId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_medicId_fkey" FOREIGN KEY ("medicId") REFERENCES public.medics(id);


--
-- Name: sessions sessions_patientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES public.patients(id);


--
-- PostgreSQL database dump complete
--

